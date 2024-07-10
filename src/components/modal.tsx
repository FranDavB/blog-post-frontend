interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: 'center' | 'right';
}

export default function ModalComponent({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  // Determinar clases de posición
  return (
<div className="fixed inset-0 z-50 flex items-center justify-center">
  <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
  <div className="relative bg-white shadow-lg p-4 rounded-lg">
    <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
      X
    </button>
    {children}
  </div>
</div>
  );
}
