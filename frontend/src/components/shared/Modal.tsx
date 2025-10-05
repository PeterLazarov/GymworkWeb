import React from "react";
import { Button } from "./Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./Dialog";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  onSubmit?: () => void;
  cancelText?: string;
  confirmText?: string;
  confirmDisabled?: boolean;
  hideFooter?: boolean;
  Actions?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  onSubmit,
  confirmDisabled,
  confirmText,
  cancelText,
  hideFooter,
  Actions,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[90vh] flex flex-col">
        <DialogHeader className="flex-1" Actions={Actions}>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
          <div className="flex flex-col flex-1 min-h-0">{children}</div>
          {!hideFooter && (
            <DialogFooter className="mt-2">
              <Button variant="outline" onClick={onClose}>
                {cancelText || "Cancel"}
              </Button>
              <Button type="submit" disabled={confirmDisabled}>
                {confirmText || "Submit"}
              </Button>
            </DialogFooter>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};
