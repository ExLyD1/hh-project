<template>
  <div class="header-container bg-myWhite py-3 w-full">
    <div class="container-page">
      <div class="header__container__items flex flex-row justify-between text-myDark text-lg p-3 gap-6 text-center">
        <div class="header__items__holder flex flex-row items-center justify-between">
          <div class="mr-24 hover:text-myDarkBlue">
            <router-link
              to="/404"
              class="hoverLinkHeader"
              exact-active-class="font-semibold text-myDarkPurple border-b-2 round border-myDarkPurple pb-2 activeLinkHeader"
            >
              Страна
            </router-link>
          </div>
          <div class="mr-10 hover:text-myDarkBlue">
            <router-link
              to="/"
              class="hoverLinkHeader link__to__landing"
              exact-active-class="font-semibold text-myDarkPurple border-b-2 round border-myDarkPurple pb-2 activeLinkHeader"
            >
              Соискателям
            </router-link>
          </div>
          <div class="hover:text-myDarkBlue">
            <router-link
              to="/Employer"
              class="hoverLinkHeader link__to__employer"
              exact-active-class="font-semibold text-myDarkPurple border-b-2 round border-myDarkPurple pb-2 activeLinkHeader"
            >
              Работодателям
            </router-link>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <div class="header__mentors mr-16 hover:text-myDarkBlue">
            <router-link
              to="/404"
              class="hoverLinkHeader"
              exact-active-class="font-semibold text-myDarkPurple border-b-2 round border-myDarkPurple pb-2 activeLinkHeader"
            >
              Наставники
            </router-link>
          </div>
          <div class="hover:text-myDarkBlue">
            <router-link
              to="/404"
              class="hoverLinkHeader"
              exact-active-class="font-semibold text-myDarkPurple border-b-2 round border-myDarkPurple pb-2 activeLinkHeader"
            >
              Все сервисы
            </router-link>
          </div>
        </div>
      </div>

      <div class="header__container__items__adaptive hidden flex-row justify-between items-center p-3 text-myDark text-center w-full text-sm ">
        <div class="flex flex-row gap-5 items-center">
          <div class="hover:text-myDarkBlue">
            <router-link
              to="/"
              class=""
              exact-active-class=""
            >
              <img class="w-9" src="../../assets/images/basic/logo.png" alt="">
            </router-link>
          </div>

          <div class="relative hover:text-myDarkBlue">
            <button @click="toggleDropdown" class="dropdown-button">
              Ищу работу ⮟
            </button>
            <div v-if="isDropdownVisible" class="dropdown-menu">
              <router-link
                to="/search"
                @click="selectOption('Ищу работу')"
                class="dropdown-item"
              >
                Ищу работу
              </router-link>
              <router-link
                to="/"
                @click="selectOption('Ищу сотрудника')"
                class="dropdown-item"
              >
                Ищу сотрудника
              </router-link>
            </div>
          </div>
        </div>

        <div class="flex flex-row gap-8 items-center">
          <div class="hover:text-myDarkBlue">
            <router-link
              to="/"
              class=""
              exact-active-class=""
            >
              Войти
            </router-link>
          </div>
          <div class="hover:text-myDarkBlue">
            <router-link
              to="/"
              class=""
              exact-active-class=""
            >
              <img 
                @click="toggleBurgerMenuStatus" 
                class="w-8" 
                src="../../assets/images/landing/burger-menu.svg" 
                alt=""
              >
            </router-link>
          </div>
        </div>
      </div>

      <div v-if="isBurgerMenuVisible" class="header__adaptive__bottom__info flex flex-col  ">
        <div class="border-y border-myLightGray w-full p-3">
          <router-link
            to="/404"
            class="flex flex-row gap-2 items-center"
            exact-active-class=""
          >
            Россия <img src="../../assets/images/basic/gps_arrow.png" alt="">
          </router-link>
        </div>

        <div class="p-3">Помощь</div>
        <div class="border border-myBlue rounded-full p-3 w-11/12 flex items-center justify-center m-auto text-myBlue mb-8">Создать резюме</div>
        <div class="bg-myLightGray flex flex-col gap-8 p-3">
          <div class="flex flex-col gap-3">
            <h2 class="font-bold text-2xl">Продвижение резюме</h2>
            <router-link to="/">
              <div>Готовое резюме</div>
            </router-link>
            <router-link to="/">
              <div>Карьерная консультация</div>
            </router-link>
            <router-link to="/">
              <div>Репетиция собеседования</div>
            </router-link>
            <router-link to="/">
              <div>Статистика по вакансии</div>
            </router-link>
            <router-link to="/">
              <div>Профориентация</div>
            </router-link>
            <router-link to="/">
              <div>Продвижение резюме</div>
            </router-link>
            <router-link to="/">
              <div>Хочу у вас работать</div>
            </router-link>
            <router-link to="/">
              <div>Экспертная рекомендация</div>
            </router-link>
          </div>
          <div class="flex flex-col gap-3">
            <h2 class="font-bold text-2xl">Образование и консультации</h2>
            <router-link to="/">
              <div>Бесплатные вебинары</div>
            </router-link>
            <router-link to="/">
              <div>Статьи</div>
            </router-link>
            <router-link to="/">
              <div>Школа программистов</div>
            </router-link>
            <router-link to="/">
              <div>ИТ-проекты</div>
            </router-link>
            <router-link to="/">
              <div>Жизнь в компании</div>
            </router-link>
            <router-link to="/">
              <div>Рейтинг работодателей России</div>
            </router-link>
          </div>
          <div class="flex flex-col gap-3">
            <h2 class="font-bold text-2xl">Студентам и начинающим специалистам</h2>
            <router-link to="/">
              <div>Карьера для молодых специалистов</div>
            </router-link>
            <router-link to="/">
              <div>Рейтинг факультетов и вузов</div>
            </router-link>
            <router-link to="/">
              <div>Карьера в некоммерческих организациях</div>
            </router-link>
          </div>
          <div class="flex flex-col gap-3">
            <h2 class="font-bold text-2xl">Сервисы в разработке</h2>
            <router-link to="/">
              <div>Песочница</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isDropdownVisible = ref(false);
const isBurgerMenuVisible = ref(false);
const isMobileView = ref(window.innerWidth < 752);

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

const selectOption = (option) => {
  console.log(option);
  isDropdownVisible.value = false;
};

const toggleBurgerMenuStatus = () => {
  isBurgerMenuVisible.value = !isBurgerMenuVisible.value;
};

const handleResize = () => {
  isMobileView.value = window.innerWidth < 752;
  if (!isMobileView.value) {
    isBurgerMenuVisible.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.hoverLinkHeader:hover {
  border-bottom: 3px solid #AF16FA;
  padding-bottom: 23px;
}

.activeLinkHeader {
  border-bottom: 3px solid #AF16FA !important;
  padding-bottom: 23px !important;
}

@media screen and (max-width: 1000px) {
  .activeLinkHeader {
    padding-bottom: 37px !important;
  }
}

@media screen and (max-width: 860px) {
  .header__container__items {
    padding: 0px;
  }

  .header__mentors {
    margin-right: 20px !important;
  }

  .activeLinkHeader {
    padding-bottom: 12px !important;
  }
}

@media screen and (max-width: 752px) {
  .header__container__items {
    display: none;
  }

  .header__container__items__adaptive {
    display: flex;
  }
}

.relative {
  position: relative;
}

.dropdown-button {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  outline: inherit;
}

.dropdown-menu {
  position: absolute;
  top: 150%;
  left: -10px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.dropdown-item {
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
  width: 100%;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}


.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #333 transparent; /* Треугольник */
}
</style>
