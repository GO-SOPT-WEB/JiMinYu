function Error404($container) {
  this.$container = $container;

  this.render = () => {
    this.$container.innerHTML = `
            <main class="errorPage">
                <p>에러 페이지입니다</p>
            </main>
            `;
  };
  this.render();
}
export default Error404;
