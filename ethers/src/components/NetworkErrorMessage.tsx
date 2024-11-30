interface NetworkErrorMessageProps {
    message: string
    dismiss: () => void
}

export function NetworkErrorMessage({
    message,
    dismiss,
}: NetworkErrorMessageProps) {
    return (
        <div className="alert alert-danger" role="alert">
            {message}
            <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={dismiss}
            >
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}
