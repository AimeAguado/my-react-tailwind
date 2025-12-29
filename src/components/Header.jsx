import Notifications from "./notifications";

const styleFoto = { backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAO11dy2wOWES_JCPSilICBk_4K9kfbE8bth7rWPUEW8Dp4dZCmCPhjDvyz5w0J8qklWsWZXEBGYnagurzYiQ_bXTSEX1J25bc1MCeC6APzt-KCzUq2zXMym39b1aOa-jiyU596szXt8qV7fc_FmfOohZQn0hoCH-MSq_hSyaJRV7yDL6_SQ_fcjwhdthYs6_PiW4RAef8LNsyzhSowy_IPQUb4yUoz1sWxSVumbhCtg1N7g31pzcBjmEUVH_eiNTH4sC3W7E-GOxo")'}

function Header({ notifications, countNoLeidas, cargarNotificaciones, userName}) {
    return (
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-solid border-border-color bg-white px-6 py-4 lg:px-10">

        <div className="flex items-center gap-4 text-text-main">
            <div className="flex items-center justify-center size-10 rounded-full bg-primary text-black">
            <span className="material-symbols-outlined">dashboard</span>
            </div>
            <h2 className="text-xl font-bold text-black leading-tight tracking-tight">
            AdminPanel
            </h2>
        </div>

        <div className="flex items-center gap-6">

            <div className="md:flex items-center gap-3">
            <div className="flex flex-col items-end">
                <span id="saludo" className="text-sm font-bold leading-none">
                Hola
                </span>
                <span className="text-xs text-text-sub text-main">
                {userName}
                </span>
            </div>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" data-alt="Portrait of admin user John Doe" style={styleFoto}></div>
            </div>

            <div className="relative group">
            <button
                id="btn-notification"
                className="relative flex items-center justify-center size-10 rounded-full
                            bg-surface-light border border-border-color
                            hover:bg-gray-50 transition-colors"
                >
                <span className="material-symbols-outlined text-text-main">
                    notifications
                </span>

                {countNoLeidas >0 && <span
                    className="absolute -top-1 -right-1
                            flex items-center justify-center
                            min-w-[18px] h-[18px]
                            px-1
                            bg-red-500
                            text-white text-[10px] font-semibold
                            border-2 border-white
                            rounded-full"
                >
                    {countNoLeidas}
                </span>}
                </button>


            <div
                id="notificaciones"
                className="absolute right-0 top-full mt-3 w-80 sm:w-96 p-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right"
            >
                <div className="bg-white rounded-xl shadow-xl border border-border-color overflow-hidden">

                <div className="p-4 border-b border-border-color flex justify-between items-center">
                    <h3 className="font-bold text-sm">Notifications</h3>
                    <button className="text-xs text-text-sub hover:text-primary transition-colors">
                    Mark all read
                    </button>
                </div>

                <div className="max-h-[300px] overflow-y-auto">
                    <Notifications notifications={notifications} cargarNotificaciones={cargarNotificaciones} />
                </div>

                <div className="p-3 bg-gray-50 text-center">
                    <button className="text-xs font-bold text-text-main hover:underline">
                    View All Activity
                    </button>
                </div>

                </div>
            </div>
            </div>

        </div>
        </header>
    );
}

export default Header;
