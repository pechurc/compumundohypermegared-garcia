const item = {
    id: 1,
    title: 'Procesador Intel Core i7 9700F 4.7GHz Turbo 1151 Coffee Lake',
    description: 'Procesador Intel Core i7 9700F 4.7GHz Turbo 1151 Coffee Lake',
    pictureUrl: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16200_Procesador_Intel_Core_i7_9700F_4.7GHz_Turbo_1151_Coffee_Lake_40da7c9b-grn.jpg',
    price: 2000,
    stock: 20
}

const itemMock = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(item)
    }, 2000);
})


export default itemMock;