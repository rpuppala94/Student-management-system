export type FeeStatus = 'Paid' | 'Pending' | 'Failed';

export interface FeeBreakdownItem {
    label: string;
    amount: number;
}

export interface PaymentRecord {
    id: string;
    receiptNumber: string;
    semester: string;
    paymentDate: string;
    feeType: string;
    amount: number;
    paymentMethod: string;
    status: FeeStatus;
}

export const feeBreakdown: FeeBreakdownItem[] = [
    { label: 'Tuition Fee', amount: 60000 },
    { label: 'University / Examination Fee', amount: 5000 },
    { label: 'Library Fee', amount: 3000 },
    { label: 'Laboratory Fee', amount: 7000 },
    { label: 'Other Charges', amount: 10000 },
];

export const paymentRecords: PaymentRecord[] = [
    { id: 'payment-001', receiptNumber: 'REC-2026-00125', semester: '5th Semester', paymentDate: '2026-09-05', feeType: 'Semester Fee', amount: 50000, paymentMethod: 'Online', status: 'Paid' },
    { id: 'payment-002', receiptNumber: 'REC-2026-00098', semester: '5th Semester', paymentDate: '2026-08-12', feeType: 'Tuition Fee', amount: 30000, paymentMethod: 'Bank Transfer', status: 'Paid' },
    { id: 'payment-003', receiptNumber: 'REC-2026-00075', semester: '5th Semester', paymentDate: '2026-07-10', feeType: 'Examination Fee', amount: 5000, paymentMethod: 'Online', status: 'Paid' },
    { id: 'payment-004', receiptNumber: 'REC-2026-00042', semester: '4th Semester', paymentDate: '2026-03-15', feeType: 'Semester Fee', amount: 42000, paymentMethod: 'Online', status: 'Paid' },
    { id: 'payment-005', receiptNumber: 'REC-2026-00018', semester: '3rd Semester', paymentDate: '2025-11-22', feeType: 'Library Fee', amount: 3000, paymentMethod: 'Cash Counter', status: 'Paid' },
];

export const formatCurrency = (amount: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
export const formatPaymentDate = (date: string) => new Date(`${date}T12:00:00`).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });