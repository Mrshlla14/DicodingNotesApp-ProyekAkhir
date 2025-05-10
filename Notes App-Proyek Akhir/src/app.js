import './style.css';

let notes = [];
const BASE_URL = 'https://notes-api.dicoding.dev/v2';

function dispatchNotesUpdated() {
    document.dispatchEvent(new CustomEvent('notes-updated', { detail: notes }));
}

async function fetchNotes() {
    showLoading(true);
    try {
        const response = await fetch(`${BASE_URL}/notes`);
        const result = await response.json();
        if (result.status === 'success') {
            notes = result.data.filter(note => !note.archived);
            dispatchNotesUpdated();
        }
    } catch (error) {
        console.error('Gagal mengambil data dari API:', error);
    } finally {
        showLoading(false);
    }
}

async function saveNoteToAPI(note) {
    showLoading(true);
    try {
        const response = await fetch(`${BASE_URL}/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: note.title,
                body: note.body,
            }),
        });

        const result = await response.json();
        if (result.status === 'success') {
            fetchNotes();
        } else {
            console.error('Gagal menambahkan catatan:', result.message);
        }
    } catch (error) {
        console.error('Kesalahan saat menyimpan catatan:', error);
    } finally {
        showLoading(false);
    }
}

async function deleteNote(id) {
    showLoading(true);
    try {
        const response = await fetch(`${BASE_URL}/notes/${id}`, {
            method: 'DELETE'
        });
        const result = await response.json();
        if (result.status === 'success') {
            fetchNotes();
        }
    } catch (err) {
        console.error('Gagal menghapus catatan:', err);
    } finally {
        showLoading(false);
    }
}

async function archiveNote(id) {
    showLoading(true);
    try {
        const response = await fetch(`${BASE_URL}/notes/${id}/archive`, {
            method: 'POST'
        });
        const result = await response.json();
        if (result.status === 'success') {
            fetchNotes();
        }
    } catch (err) {
        console.error('Gagal mengarsipkan catatan:', err);
    } finally {
        showLoading(false);
    }
}

function showLoading(state) {
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = state ? 'block' : 'none';
}

const loadingElement = document.createElement('div');
loadingElement.id = 'loader';
loadingElement.textContent = 'Memuat catatan...';
loadingElement.style.cssText = 'text-align:center; padding:1rem; color:#3498db;';
document.body.prepend(loadingElement);

class NoteCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['data-id', 'data-title', 'data-body', 'data-date'];
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    formatDate(dateStr) {
        const date = new Date(dateStr);
        return new Intl.DateTimeFormat('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    }

    render() {
        const id = this.getAttribute('data-id');
        const title = this.getAttribute('data-title');
        const body = this.getAttribute('data-body');
        const date = this.getAttribute('data-date');

        this.shadowRoot.innerHTML = `
            <style>
                .note-card {
                    background-color: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .note-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                }
                .note-title {
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: 10px;
                    color: #2c3e50;
                }
                .note-body {
                    font-size: 14px;
                    line-height: 1.5;
                    color: #555;
                }
                .note-date {
                    font-size: 12px;
                    color: #999;
                    margin-top: 15px;
                    text-align: right;
                }
                .note-actions {
                    margin-top: 15px;
                    display: flex;
                    justify-content: flex-end;
                    gap: 10px;
                }
                .btn {
                    padding: 6px 12px;
                    font-size: 12px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    color: white;
                }
                .archive {
                    background-color: #f39c12;
                }
                .delete {
                    background-color: #e74c3c;
                }
            </style>
            <div class="note-card">
                <div class="note-title">${title}</div>
                <div class="note-body">${body}</div>
                <div class="note-date">${this.formatDate(date)}</div>
                <div class="note-actions">
                    <button class="btn archive">Arsipkan</button>
                    <button class="btn delete">Hapus</button>
                </div>
            </div>
        `;

        this.shadowRoot.querySelector('.archive')?.addEventListener('click', () => {
            archiveNote(this.getAttribute('data-id'));
        });
        this.shadowRoot.querySelector('.delete')?.addEventListener('click', () => {
            deleteNote(this.getAttribute('data-id'));
        });
    }
}

// Komponen lainnya tetap
customElements.define('note-card', NoteCard);
document.addEventListener('DOMContentLoaded', fetchNotes)