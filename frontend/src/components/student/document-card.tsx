import { Archive, Download, FileText, Image, Presentation, Sheet } from 'lucide-react';
import type { StudentDocument } from '../../data/student-documents';

interface DocumentCardProps { document: StudentDocument; onView: () => void; onDownload: () => void; }

const getDocumentIcon = (fileType: string) => {
    if (['PPT', 'PPTX'].includes(fileType)) return Presentation;
    if (['XLS', 'XLSX'].includes(fileType)) return Sheet;
    if (['JPG', 'JPEG', 'PNG'].includes(fileType)) return Image;
    if (fileType === 'ZIP') return Archive;
    return FileText;
};

export const DocumentCard = ({ document, onView, onDownload }: DocumentCardProps) => {
    const Icon = getDocumentIcon(document.fileType);

    return <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/60"><div className="flex items-start gap-3"><div className="rounded-xl bg-indigo-50 p-2.5 text-indigo-600"><Icon className="h-5 w-5" /></div><div className="min-w-0 flex-1"><p className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-600">{document.fileType} <span className="px-1 text-slate-300">•</span> {document.fileSize}</p><h2 className="mt-1.5 text-base font-extrabold leading-5 text-slate-900">{document.title}</h2><p className="mt-1 text-sm font-semibold text-slate-600">{document.subject}</p></div></div><div className="mt-4 space-y-1 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500"><p>{document.category} <span className="px-1 text-slate-300">•</span> {document.semester}</p><p>Uploaded by {document.uploadedBy}</p><p>{new Date(`${document.uploadedDate}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p></div><div className="mt-5 flex gap-2"><button type="button" onClick={onView} className="flex-1 rounded-xl border border-indigo-200 px-3 py-2.5 text-sm font-bold text-indigo-700 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">View</button><button type="button" aria-label={`Download ${document.title}`} title="Download document" onClick={onDownload} className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"><Download className="h-4 w-4" /></button></div></article>;
};