import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classNames from 'classnames';

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: ReactNode;
    href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: FC<ButtonProps> = (props) => {
    const { btnType, className, size, disabled, children, href, ...restProps } = props;
    // btn, btn-lg, btn-primary
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled
    })

    if (btnType === ButtonType.Link && href) {
        return (
            <a className={classes} href={href} {...restProps}>{children}</a>
        )
    } else {
        return (
            <button disabled={disabled} className={classes} {...restProps}>{children}</button>
        )
    }

};

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}

export default Button;