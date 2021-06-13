<template>
    <div class="flex flex-col items-center w-2/12 min-h-screen bg-gray-900 pt-8">
        <div class="w-10/12 self-center mt-4">
            <div class="flex flex-row box-border rounded-lg bg-gray-800 p-4">
                <img src="https://i1.sndcdn.com/avatars-fuFi52Szkbdm16Gg-arzAGQ-t500x500.jpg" class="w-12 h-12 rounded-full">

                <div class="flex w-full flex-col ml-2 justify-center">
                    <span class="text-sm font-bold text-gray-400">{{ userName }}</span>
                    <span class="text-xs text-indigo-500">Бесплатный</span>
                </div>
            </div>
        </div>

        <div>
            <SidebarGroup title="Карты">
                <SidebarItem to="/dashboard" text="Мои карточки">
                    <svg xmlns="http://www.w3.org/2000/svg" :class="iconClassObject" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                    </svg>
                </SidebarItem>

                <SidebarItem to="/dashboard/cards/add" text="Добавить карточку">
                    <svg xmlns="http://www.w3.org/2000/svg" :class="iconClassObject" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                    </svg>
                </SidebarItem>

                <!-- <SidebarItem to="/dashboard/card_holder" text="Визитница">
                    <svg xmlns="http://www.w3.org/2000/svg" :class="iconClassObject" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                </SidebarItem> -->
            </SidebarGroup>

            <SidebarGroup title="Кабинет">
                <SidebarItem to="/dashboard/settings" text="Настройки">
                    <svg xmlns="http://www.w3.org/2000/svg" :class="iconClassObject" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                    </svg>
                </SidebarItem>

                <SidebarItem to="/auth/logout" text="Выйти">
                    <svg xmlns="http://www.w3.org/2000/svg" :class="iconClassObject" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
                    </svg>
                </SidebarItem>
            </SidebarGroup>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            userName: function () {
                return this.$auth.user.name;
            },

            iconClassObject: function () {
                return ["h-6", "w-6", "mr-3"];
            }
        }
    }
</script>