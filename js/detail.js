function tampilkanDetail(id){

  const data =
  dataJabatan.find(
      item => item.id === id
  );

  if(!data) return;

  document
  .getElementById('detail')
  .innerHTML = `

    <h2>${data.nama_jabatan}</h2>

    <h3>Personel</h3>
    <p>${data.personel}</p>

    <h3>Tugas</h3>
    <pre>${data.tugas}</pre>

    <h3>Wewenang</h3>
    <pre>${data.wewenang}</pre>

    <h3>Tanggung Jawab</h3>
    <pre>${data.tanggung_jawab}</pre>

  `;
}
