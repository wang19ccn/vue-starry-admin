<template>
    <aside>
        <div class="toggle">
            <div class="logo">
                <img src="images/logo.png" />
                <h2>Asmr<span class="danger">Prog</span></h2>
            </div>
            <div class="close" id="close-btn">
                <span class="material-icons-sharp"> close </span>
            </div>
        </div>

        <div class="sidebar">
            <router-link
                v-for="item of SideDate"
                :key="item.id"
                :to="item.to"
                :class="{ active: route.path == item.to, top: item.id == 1 }"
            >
                <span class="material-icons-sharp"> {{ item.icon }} </span>
                <h3>{{ item.name }}</h3>
            </router-link>
        </div>

        <!-- <div class="sidebar">
            <a href="#">
                <span class="material-icons-sharp"> dashboard </span>
                <h3>Dashboard</h3>
            </a>

            <a href="#">
                <span class="material-icons-sharp"> person_outline </span>
                <h3>Users</h3>
            </a>

            <a href="#">
                <span class="material-icons-sharp"> receipt_long </span>
                <h3>History</h3>
            </a>

            <a href="#" class="active">
                <span class="material-icons-sharp"> insights </span>
                <h3>Analytics</h3>
            </a>

            <a href="#">
                <span class="material-icons-sharp"> mail_outline </span>
                <h3>Tickets</h3>
                <span class="message-count">27</span>
            </a>

            <a href="#">
                <span class="material-icons-sharp"> inventory </span>
                <h3>Sale List</h3>
            </a>

            <a href="#">
                <span class="material-icons-sharp"> report_gmailerrorred </span>
                <h3>Reports</h3>
            </a>

            <a href="#">
                <span class="material-icons-sharp"> settings </span>
                <h3>Settings</h3>
            </a>

            <a href="#">
                <span class="material-icons-sharp"> add </span>
                <h3>New Login</h3>
            </a>

            <a href="#">
                <span class="material-icons-sharp"> logout </span>
                <h3>Logout</h3>
            </a>
        </div> -->
    </aside>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

type routeDate = {
    id: number
    icon: string
    name: string
    to: string
}

const SideDate: routeDate[] = reactive([
    {
        id: 1,
        icon: 'dashboard',
        name: 'Dashboard',
        to: '/Dashboard'
    },
    {
        id: 2,
        icon: 'person_outline',
        name: 'Users',
        to: '/Users'
    },
    {
        id: 3,
        icon: 'receipt_long',
        name: 'History',
        to: '/History'
    },
    {
        id: 4,
        icon: 'insights',
        name: 'Analytics',
        to: '/Analytics'
    },
    {
        id: 5,
        icon: 'mail_outline',
        name: 'Tickets',
        to: '/Tickets'
    },
    {
        id: 6,
        icon: 'inventory',
        name: 'Sale List',
        to: '/Sale List'
    },
    {
        id: 7,
        icon: 'report_gmailerrorred',
        name: 'Reports',
        to: '/Reports'
    },
    {
        id: 8,
        icon: 'settings',
        name: 'Settings',
        to: '/Settings'
    },
    {
        id: 9,
        icon: 'add',
        name: 'New Login',
        to: '/NewLogin'
    },
    {
        id: 10,
        icon: 'logout',
        name: 'Logout',
        to: '/logout'
    }
])
</script>

<style lang="scss" scoped>
/* Sidebar styles */
aside {
    height: 100vh;

    .toggle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1.4rem;

        .logo {
            display: flex;
            gap: 0.5rem;

            img {
                width: 2rem;
                height: 2rem;
            }
        }

        .close {
            padding-right: 1rem;
            display: none;
        }
    }

    .sidebar {
        display: flex;
        flex-direction: column;
        background-color: $color-white;
        box-shadow: $box-shadow;
        border-radius: 15px;
        height: 88vh;
        position: relative;
        top: 1.5rem;
        transition: all 0.3s ease; /* 过渡可以为一个元素在不同状态之间切换的时候定义不同的过渡效果 */

        &:hover {
            box-shadow: none;
        }

        a {
            display: flex;
            align-items: center;
            color: $color-info-dark;
            height: 3.7rem;
            gap: 1rem;
            position: relative;
            margin-left: 2rem;
            transition: all 0.3s ease;

            span {
                font-size: 1.6rem;
                transition: all 0.3s ease;
            }

            &:last-child {
                position: absolute;
                bottom: 2rem;
                width: 100%;
            }

            &.active {
                width: 100%;
                color: $color-primary;
                background-color: $color-light;
                margin-left: 0;

                &.top {
                    border-radius: 15px 15px 0 0;
                }

                &::before {
                    content: '';
                    width: 6px;
                    height: 18px;
                    background-color: $color-primary;
                }

                span {
                    color: $color-primary;
                    margin-left: calc(1rem - 3px);
                }
            }

            &:hover {
                color: $color-primary;

                span {
                    margin-left: 0.6rem;
                }
            }
        }

        .message-count {
            background-color: $color-danger;
            padding: 2px 6px;
            color: $color-white;
            font-size: 11px;
            border-radius: $border-radius-1;
        }
    }
}
</style>
