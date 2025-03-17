import React, { useState } from 'react'

interface TransferProps {
    transferTokens: (to: string, amount: number) => void
    tokenSymbol: string
}

export function Transfer({ transferTokens, tokenSymbol }: TransferProps) {
    const [to, setTo] = useState('')
    const [amount, setAmount] = useState('1')

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if (to && amount) {
            transferTokens(to, Number(amount))
        }
    }

    return (
        <div>
            <h4>Transfer</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Amount of {tokenSymbol}</label>
                    <input
                        className="form-control"
                        type="number"
                        step="1"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="1"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Recipient address</label>
                    <input
                        className="form-control"
                        type="text"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="Transfer"
                    />
                </div>
            </form>
        </div>
    )
}
