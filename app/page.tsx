'use client'

import {
  Users,
  Wallet,
  Clock3,
  LayoutDashboard,
  Receipt,
  LogOut,
  TrendingUp,
  CircleDollarSign,
} from 'lucide-react'

export default function Page() {
  const employees = [
    {
      name: 'Tarık Polat',
      role: 'Baş Usta',
      salary: 55000,
      overtime: 22,
      advance: 5000,
    },

    {
      name: 'Mehmet Uurlu',
      role: 'Döner Ustası',
      salary: 45000,
      overtime: 18,
      advance: 3000,
    },

    {
      name: 'Yunus',
      role: 'Kasiyer',
      salary: 30000,
      overtime: 8,
      advance: 1000,
    },
  ]

  return (
    <div className="min-h-screen flex bg-[#0f172a] text-white">
      {/* Sidebar */}

      <div className="w-[280px] bg-[#111827] border-r border-white/10 p-6">
        <h1 className="text-3xl font-black mb-10 text-orange-400">
          HEY DÖNER ERP
        </h1>

        <div className="space-y-3">
          <div className="flex items-center gap-3 bg-orange-500 p-4 rounded-2xl font-bold">
            <LayoutDashboard size={22} />
            Dashboard
          </div>

          <div className="flex items-center gap-3 hover:bg-white/5 p-4 rounded-2xl cursor-pointer">
            <Users size={22} />
            Personeller
          </div>

          <div className="flex items-center gap-3 hover:bg-white/5 p-4 rounded-2xl cursor-pointer">
            <Wallet size={22} />
            Maaşlar
          </div>

          <div className="flex items-center gap-3 hover:bg-white/5 p-4 rounded-2xl cursor-pointer">
            <Clock3 size={22} />
            Mesailer
          </div>

          <div className="flex items-center gap-3 hover:bg-white/5 p-4 rounded-2xl cursor-pointer">
            <Receipt size={22} />
            Giderler
          </div>
        </div>

        <button className="mt-10 bg-red-500 w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
          <LogOut size={20} />
          Çıkış Yap
        </button>
      </div>

      {/* Main */}

      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-5xl font-black">
              Yönetim Paneli
            </h1>

            <p className="text-white/50 mt-2">
              Döner Restoran Yönetim Sistemi
            </p>
          </div>

          <button className="bg-orange-500 px-6 py-4 rounded-2xl font-bold">
            + Personel Ekle
          </button>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-4 gap-5 mb-10">
          <div className="bg-[#111827] rounded-3xl p-6 border border-white/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/50 text-sm">
                  Günlük Ciro
                </p>

                <h2 className="text-4xl font-black mt-3">
                  ₺48.750
                </h2>
              </div>

              <CircleDollarSign
                size={40}
                className="text-green-400"
              />
            </div>
          </div>

          <div className="bg-[#111827] rounded-3xl p-6 border border-white/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/50 text-sm">
                  Günlük Kar
                </p>

                <h2 className="text-4xl font-black mt-3">
                  ₺32.400
                </h2>
              </div>

              <TrendingUp
                size={40}
                className="text-blue-400"
              />
            </div>
          </div>

          <div className="bg-[#111827] rounded-3xl p-6 border border-white/5">
            <div>
              <p className="text-white/50 text-sm">
                Personel Sayısı
              </p>

              <h2 className="text-4xl font-black mt-3">
                30
              </h2>
            </div>
          </div>

          <div className="bg-[#111827] rounded-3xl p-6 border border-white/5">
            <div>
              <p className="text-white/50 text-sm">
                Aylık Maaş Gideri
              </p>

              <h2 className="text-4xl font-black mt-3">
                ₺920.000
              </h2>
            </div>
          </div>
        </div>

        {/* Table */}

        <div className="bg-[#111827] rounded-3xl overflow-hidden border border-white/5">
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <h2 className="text-3xl font-black">
              Personel Listesi
            </h2>

            <input
              type="text"
              placeholder="Personel ara..."
              className="bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-3 outline-none"
            />
          </div>

          <table className="w-full">
            <thead className="bg-black/30 text-white/50">
              <tr>
                <th className="text-left p-5">
                  Personel
                </th>

                <th className="text-left p-5">
                  Görev
                </th>

                <th className="text-left p-5">
                  Maaş
                </th>

                <th className="text-left p-5">
                  Mesai
                </th>

                <th className="text-left p-5">
                  Avans
                </th>

                <th className="text-left p-5">
                  İşlem
                </th>
              </tr>
            </thead>

            <tbody>
              {employees.map((emp, index) => (
                <tr
                  key={index}
                  className="border-t border-white/5 hover:bg-black/20"
                >
                  <td className="p-5 font-bold">
                    {emp.name}
                  </td>

                  <td className="p-5">
                    {emp.role}
                  </td>

                  <td className="p-5">
                    ₺{emp.salary}
                  </td>

                  <td className="p-5 text-orange-400 font-bold">
                    {emp.overtime} Saat
                  </td>

                  <td className="p-5 text-red-400">
                    ₺{emp.advance}
                  </td>

                  <td className="p-5">
                    <div className="flex gap-3">
                      <button className="bg-blue-500 px-4 py-2 rounded-xl">
                        Düzenle
                      </button>

                      <button className="bg-red-500 px-4 py-2 rounded-xl">
                        Sil
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
