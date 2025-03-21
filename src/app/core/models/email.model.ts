export interface EmailModel {
    id: number;
    sender: string;
    to?: string;
    subject: string;
    date: Date;
    folder?: 'inbox' | 'sent' | 'drafts' | 'spam' | 'trash' | 'starred';
    body: string;
    read?: boolean;
}