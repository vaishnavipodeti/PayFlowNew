
import { createContext, useContext, useEffect, useState } from 'react'

const PayFlowContext = createContext()
const STORAGE_KEY = 'payflow-demo-v1'
const DEMO_PIN = '1234'

function getInitialData() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY))

    if (Number.isFinite(data?.balance) && Array.isArray(data?.transactions)) {
      return data
    }
  } catch (error) {
    console.error('Unable to load PayFlow data:', error)
  }

  return { balance: 5000, transactions: [] }
}

export function PayFlowProvider({ children }) {
  const [data, setData] = useState(getInitialData)
  const { balance, transactions } = data

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }, [data])

  function processPayment(recipientName, upiID, amount, note, pin) {
    amount = Number(amount)

    if (pin !== DEMO_PIN) {
      return { success: false, message: 'Incorrect UPI PIN.' }
    }

    if (!Number.isFinite(amount) || amount <= 0) {
      return { success: false, message: 'Enter a valid amount.' }
    }

    if (amount > balance) {
      return { success: false, message: 'Insufficient balance.' }
    }

    const transaction = {
      id: Date.now(),
      recipientName,
      upiID,
      amount,
      note,
      type: 'Payment',
      status: 'Successful',
      date: new Date().toLocaleString(),
    }

    setData({
      balance: balance - amount,
      transactions: [transaction, ...transactions],
    })

    return { success: true }
  }

  function refundTransaction(id) {
    const transaction = transactions.find((item) => item.id === id)

    if (!transaction || transaction.status !== 'Successful') return false

    setData({
      balance: balance + transaction.amount,
      transactions: transactions.map((item) =>
        item.id === id ? { ...item, status: 'Refunded' } : item
      ),
    })

    return true
  }

  return (
    <PayFlowContext.Provider
      value={{ balance, transactions, processPayment, refundTransaction }}
    >
      {children}
    </PayFlowContext.Provider>
  )
}

export function usePayFlow() {
  return useContext(PayFlowContext)
}
export default PayFlowContext