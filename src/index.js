import listTemplate from './template-menu-list.hbs';
import menu from './menu.json';

const menuListMurkup = listTemplate(menu);
const refs = {
  menuList: document.querySelector('ul.js-menu'),
  checkbox: document.querySelector('#theme-switch-toggle'),
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkCurrentTheme();
refs.menuList.innerHTML = menuListMurkup;

refs.checkbox.addEventListener('input', () => {
  if (localStorage.getItem('userTheme') === Theme.DARK) {
    setLightThemeOnBody();
    return;
  }
  if (localStorage.getItem('userTheme') === Theme.LIGHT) {
    setDarkThemeOnBody();
  }
});

function checkCurrentTheme() {
  if (localStorage.getItem('userTheme') === null) {
    localStorage.setItem('userTheme', Theme.LIGHT);
    return;
  }
  if (localStorage.getItem('userTheme') === Theme.DARK) {
    document.body.classList.add('dark-theme');
    refs.checkbox.checked = true;
  }
}

function setDarkThemeOnBody() {
  document.body.classList.remove('light-theme');
  document.body.classList.add('dark-theme');
  localStorage.setItem('userTheme', Theme.DARK);
}

function setLightThemeOnBody() {
  document.body.classList.remove('dark-theme');
  document.body.classList.add('light-theme');
  localStorage.setItem('userTheme', Theme.LIGHT);
}
