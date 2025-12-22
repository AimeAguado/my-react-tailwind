function Header({text}) {

  
    return (
     <header class="sticky top-0 z-30 flex items-center justify-between border-b border-solid border-border-color dark:border-surface-dark bg-white dark:bg-background-dark px-6 py-4 lg:px-10">
<div class="flex items-center gap-4 text-text-main dark:text-white">
<div class="flex items-center justify-center size-10 rounded-full bg-primary text-black">
<span class="material-symbols-outlined">dashboard</span>
</div>
<h2 class="text-xl font-bold leading-tight tracking-tight">AdminPanel</h2>
</div>
<div class="flex items-center gap-6">
<div class="hidden md:flex items-center gap-3">
<div class="flex flex-col items-end">
    <span id="saludo" class="text-sm font-bold leading-none">
        Hola
    </span>
<span class="text-xs text-text-sub dark:text-gray-400">Super Admin</span>
</div>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" data-alt="Portrait of admin user John Doe"></div>
</div>

<div class="relative group">
<button id="btn-notification" class="relative flex items-center justify-center size-10 rounded-full bg-surface-light dark:bg-surface-dark border border-border-color dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
<span class="material-symbols-outlined text-text-main dark:text-white">notifications</span>
<span class="absolute top-2 right-2 size-2.5 bg-red-500 border-2 border-white dark:border-background-dark rounded-full"></span>
</button>
<div id="notificaciones" class="absolute right-0 top-full mt-3 w-80 sm:w-96 p-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
<div class="bg-white dark:bg-surface-dark rounded-xl shadow-xl border border-border-color dark:border-gray-700 overflow-hidden">
<div class="p-4 border-b border-border-color dark:border-gray-700 flex justify-between items-center">
<h3 class="font-bold text-sm">Notifications</h3>
<button class="text-xs text-text-sub hover:text-primary transition-colors">Mark all read</button>
</div>
<div class="max-h-[300px] overflow-y-auto">
<div id="lista-notificaciones" class="p-4 border-b border-border-color dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-black/20 transition-colors">
<div class="flex gap-3">
<div class="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-[18px]">info</span>
</div>
<div class="flex-1 space-y-2">
<p class="text-sm font-medium text-text-main dark:text-white leading-tight">System Maintenance</p>
<p class="text-xs text-text-sub dark:text-gray-400">Scheduled downtime tonight at 2:00 AM EST for 30 mins.</p>
<div class="flex gap-2 pt-1">
<button class="text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-primary text-black hover:bg-yellow-400 transition-colors">Read</button>
<button class="text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-text-sub hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Delete</button>
</div>
</div>
</div>
</div>
<div class="p-4 hover:bg-gray-50 dark:hover:bg-black/20 transition-colors">
<div class="flex gap-3">
<div class="size-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-[18px]">person_add</span>
</div>
<div class="flex-1 space-y-2">
<p class="text-sm font-medium text-text-main dark:text-white leading-tight">New User Registration</p>
<p class="text-xs text-text-sub dark:text-gray-400">Anna Karenina has requested access.</p>
<div class="flex gap-2 pt-1">
<button id="" class="text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-text-main dark:text-white hover:bg-primary hover:text-black transition-colors">Read</button>
<button class="text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-text-sub hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Delete</button>
</div>
</div>
</div>
</div>
</div>
<div class="p-3 bg-gray-50 dark:bg-black/20 text-center">
<button class="text-xs font-bold text-text-main dark:text-white hover:underline">View All Activity</button>
</div>
</div>
</div>
</div>
</div>
</header>

    )
}

export default Header