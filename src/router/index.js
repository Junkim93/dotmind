import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Lobby from '../views/Lobby.vue';
import Game from '../views/Game.vue';
import MultiGame from '../views/MultiGame.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/lobby',
    name: 'lobby',
    component: Lobby,
  },
  {
    path: '/game',
    name: 'game',
    component: Game,
  },
  {
    path: '/multi-game',
    name: 'multiGame',
    component: MultiGame,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
