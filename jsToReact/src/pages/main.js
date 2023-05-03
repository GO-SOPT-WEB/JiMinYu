function MainPage($container) {
  this.$container = $container;

  this.render = () => {
    this.$container.innerHTML = `
      <main class="mainPage">
        <header>
          <h1>메인페이지 입니다.</h1>
        </header>
      </main>
      `;
  };
  this.render();
}
export default MainPage;
