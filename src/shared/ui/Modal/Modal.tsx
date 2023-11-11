import { classNames } from 'shared/lib/classNames/classNames';
import React, {KeyboardEvent, ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import cls from './Modal.module.scss';
import Portal from "shared/ui/Portal/Portal";

interface ModalProps {
    className?: string;
    children?: ReactNode
    isOpen?: boolean;
    onClose?: () => void; // () => Возвращает ничего, по сути присваиваем функцию с пустым значением чтобы она не ругалась с ошибкой
}
const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    // const onKeyDown = useCallback((e: KeyboardEvent) => {
    //     if (e.key === 'Escape') {
    //         closeHandler();
    //     }
    // }, [closeHandler]);
    //
    // useEffect(() => {
    //     if (isOpen) {
    //         window.addEventListener('keydown', onKeyDown);
    //     }
    //     return () => {
    //         clearTimeout(timerRef.current);
    //         window.removeEventListener('keydown', onKeyDown);
    //     };
    // }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={cls.content}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;