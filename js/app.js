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
