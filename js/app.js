window.onload = async () => {

  await loadData();

  document
  .querySelectorAll('.node')
  .forEach(node => {

    node.addEventListener(
      'click',
      () => {

        tampilkanDetail(
          node.dataset.id
        );

      }
    );

  });

};

document
.querySelectorAll('.node')
.forEach(node => {

  node.addEventListener('click', () => {

    const id =
      node.dataset.id;

    tampilkanDetail(id);

  });

});
