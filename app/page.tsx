'use client'
'use client'

import { useState } from 'react'

export default function Page() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    if (username === 'admin' && password === '12345') {
      setLoggedIn(true)
    } else {
      alert('Hatalı giriş')
    }
  }

  const employees = [
    {
      name: 'Tarık Polat',
      role: 'Döner Ustası',
      salary: 55000,
      overtime: 0
    ,
      bonus: 0,
      advance: 0,

    },name: 'Mehmet Uurlu',
      role: 'Döner Ustası',
      salary: 45000,
      overtime: 18,
      bonus: 0,
      advance: 4000,
    {
      name: 'Yunus ',
      role: 'Kasiyer',
      salary: 30000,
      overtime: 10,
      bonus: 1000,
      advance: 1000,
    },
    {
      name: 'Vedat',
      role: 'Garson',
      salary: 28000,
      overtime: 15,
      bonus: 1500,
      advance: 500,
    },
  ]

  const hourly = (salary: number) => {
    return (salary / (30 * 10)).toFixed(2)
  }

  const overtimePrice = (salary: number, overtime: number) => {
    const h = salary / (30 * 10)
    return (h * overtime * 1.5).toFixed(2)
  }

  const net = (
    salary: number,
    overtime: number,
    bonus: number,
    advance: number
  ) => {
    const h = salary / (30 * 10)
    const mesai = h * overtime * 1.5

    return (salary + mesai + bonus - advance).toFixed(2)
  }

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-10 w-full max-w-md shadow-2xl">
          <h1 className="text-4xl text-white font-black mb-2 text-center">
            HEY DÖNER
          </h1>

          <p className="text-neutral-400 text-center mb-8">
            Yönetim Paneli
          </p>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Kullanıcı Adı"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-black border border-neutral-700 text-white rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black border border-neutral-700 text-white rounded-2xl px-5 py-4 outline-none"
            />

            <button
              onClick={login}
              className="w-full bg-orange-500 hover:opacity-90 text-white rounded-2xl py-4 font-bold text-lg"
            >
              Giriş Yap
            </button>
          </div>

          <div className="mt-6 text-sm text-neutral-500 text-center">
            admin / 12345
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-5xl font-black">
              HEY DÖNER PANEL
            </h1>

            <p className="text-neutral-400 mt-3">
              Maaş • Mesai • Prim • Avans • Gelir Gider
            </p>
          </div>

          <button
            onClick={() => setLoggedIn(false)}
            className="bg-red-500 px-5 py-3 rounded-2xl font-bold"
          >
            Çıkış Yap
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">
          <div className="bg-neutral-900 rounded-3xl p-6">
            <p className="text-neutral-400 text-sm">Bugünkü Ciro</p>
            <h2 className="text-4xl font-black mt-3">₺48.750</h2>
          </div>

          <div className="bg-neutral-900 rounded-3xl p-6">
            <p className="text-neutral-400 text-sm">Bugünkü Gider</p>
            <h2 className="text-4xl font-black mt-3">₺12.400</h2>
          </div>

          <div className="bg-neutral-900 rounded-3xl p-6">
            <p className="text-neutral-400 text-sm">Aylık Maaş</p>
            <h2 className="text-4xl font-black mt-3">₺920.000</h2>
          </div>

          <div className="bg-neutral-900 rounded-3xl p-6">
            <p className="text-neutral-400 text-sm">Net Kar</p>
            <h2 className="text-4xl font-black mt-3">₺36.350</h2>
          </div>
        </div>

        <div className="bg-neutral-900 rounded-3xl overflow-hidden">
          <div className="p-6 border-b border-neutral-800">
            <h2 className="text-3xl font-black">
              Personel Listesi
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-black text-neutral-400">
                <tr>
                  <th className="text-left p-5">Personel</th>
                  <th className="text-left p-5">Görev</th>
                  <th className="text-left p-5">Maaş</th>
                  <th className="text-left p-5">Saatlik</th>
                  <th className="text-left p-5">Mesai</th>
                  <th className="text-left p-5">Prim</th>
                  <th className="text-left p-5">Avans</th>
                  <th className="text-left p-5">Net Hakediş</th>
                </tr>
              </thead>

              <tbody>
                {employees.map((emp, index) => (
                  <tr
                    key={index}
                    className="border-t border-neutral-800 hover:bg-black/40"
                  >
                    <td className="p-5 font-bold">{emp.name}</td>

                    <td className="p-5">{emp.role}</td>

                    <td className="p-5">
                      ₺{emp.salary}
                    </td>

                    <td className="p-5">
                      ₺{hourly(emp.salary)}
                    </td>

                    <td className="p-5 text-orange-400 font-bold">
                      +₺
                      {overtimePrice(
                        emp.salary,
                        emp.overtime
                      )}
                    </td>

                    <td className="p-5 text-green-400">
                      +₺{emp.bonus}
                    </td>

                    <td className="p-5 text-red-400">
                      -₺{emp.advance}
                    </td>

                    <td className="p-5 text-white font-black text-lg">
                      ₺
                      {net(
                        emp.salary,
                        emp.overtime,
                        emp.bonus,
                        emp.advance
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
