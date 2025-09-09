import React, { useEffect } from "react";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";
import { Button } from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  onSubmit: () => void;
  confirmText?: string;
  confirmDisabled?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  onSubmit,
  confirmDisabled,
  confirmText,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit();
  };

  return (
    <div
      onClick={onClose}
      className={css({
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
      })}
    >
      <dialog
        open
        onClick={(e) => e.stopPropagation()}
        className={css({
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          backgroundColor: "white",
          padding: "6",
          borderRadius: "lg",
          width: "90%",
          maxWidth: "600px",
          border: "none",
          margin: 0,
          _focus: {
            outline: "none",
          },
        })}
      >
        {title && (
          <h2
            className={css({
              fontSize: "xl",
              marginBottom: "4",
              fontWeight: "bold",
            })}
          >
            {title}
          </h2>
        )}
        <form
          onSubmit={handleSubmit}
          className={css({
            width: "100%",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            minHeight: 0, // Important for flex child to respect parent's height
          })}
        >
          <div
            className={css({
              overflowY: "auto",
              flex: 1,
              minHeight: 0, // Important for scroll to work properly
            })}
          >
            {children}
          </div>
          <div
            className={flex({
              justifyContent: "flex-end",
              gap: "2",
            })}
          >
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit" disabled={confirmDisabled}>
              {confirmText || "Submit"}
            </Button>
          </div>
        </form>
      </dialog>
    </div>
  );
};
