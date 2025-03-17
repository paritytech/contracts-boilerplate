interface NetworkErrorMessageProps {
    message: string
    dismiss: () => void
}

export function NetworkErrorMessage({
    message,
    dismiss,
}: NetworkErrorMessageProps) {
    return (
        <div
            className="alert alert-danger d-flex justify-content-between align-items-center"
            role="alert"
        >
            <span>{message}</span>
            <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={dismiss}
            ></button>
        </div>
    )
}
