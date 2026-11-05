
import { usePayFlow } from '../context/PayFlowContext'

function Analytics() {
  const { transactions, balance } = usePayFlow()

  const successful = transactions.filter(
    item => item.status === 'Successful'
  )

  const refunded = transactions.filter(
    item => item.status === 'Refunded'
  )

  const totalAmountSent = successful.reduce(
    (total, item) => total + item.amount, 0
  )

  const money = amount =>
    amount.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

  return (
    <div className="space-y-6">
   <div>
    <p className="text-sm font-medium text-blue-400">INSIGHTS</p>
    <h1 className="mt-2 text-3xl font-bold text-white">Analytics</h1>
   <p className="mt-2 text-slate-400">Understand your payment activity at a glance.</p>
    </div>
  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
   <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
    <p className="text-sm text-slate-400">Available balance</p>
   <p className="mt-4 break-words text-2xl font-bold text-blue-400">
            ₹{money(balance)}
     </p>
   <p className="mt-3 text-sm text-slate-500">
            Your current demo balance
          </p>
        </div>
<div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
  <p className="text-sm text-slate-400">Total transactions</p>
 <p className="mt-4 break-words text-2xl font-bold text-white">
            {transactions.length}
  </p>
<p className="mt-3 text-sm text-slate-500">All recorded payment activity </p>
    </div>
<div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
  <p className="text-sm text-slate-400">Amount sent</p>
  <p className="mt-4 break-words text-2xl font-bold text-emerald-400">
            ₹{money(totalAmountSent)}
    </p>
<p className="mt-3 text-sm text-slate-500"> Excludes refunded payments </p>
       </div>
   <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
    <p className="text-sm text-slate-400">Refunded payments</p>
  <p className="mt-4 break-words text-2xl font-bold text-orange-400">
            {refunded.length}
     </p>
<p className="mt-3 text-sm text-slate-500">Payments marked as refunded</p>
     </div>
 </div>
<section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
<h2 className="text-lg font-bold text-white">Payment summary</h2>
<p className="mt-2 text-sm text-slate-400">Successful payments: {successful.length} </p>
<p className="mt-2 text-sm text-slate-400"> Refunded payments: {refunded.length}
   </p>
 <p className="mt-2 text-sm text-slate-400">Total recorded payments: {transactions.length}
 </p>
</section>

    </div>
  )
}

export default Analytics
