const items = [
    {
        id: 1,
        title: 'Procesador Intel Core i7 9700F 4.7GHz Turbo 1151 Coffee Lake',
        description: 'Procesador Intel Core i7 9700F 4.7GHz Turbo 1151 Coffee Lake',
        pictureUrl: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16200_Procesador_Intel_Core_i7_9700F_4.7GHz_Turbo_1151_Coffee_Lake_40da7c9b-grn.jpg',
        price: 2000,
        category_id: 1
    },
    {
        id: 2,
        title: 'Procesador AMD Ryzen 5 1600 AF Zen+ 12nm AM4 Wraith Stealth Cooler',
        description: 'Procesador AMD Ryzen 5 1600 AF Zen+ 12nm AM4 Wraith Stealth Cooler',
        pictureUrl: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17898_Procesador_AMD_Ryzen_5_1600_AF_Zen__12nm_AM4_Wraith_Stealth_Cooler_187bb9ab-grn.jpg',
        price: 2000,
        category_id: 1
    },
    {
        id: 3,
        title: 'Fuente ASUS ROG STRIX 750G 80 Plus Gold 750W Full Modular',
        description: 'Fuente ASUS ROG STRIX 750G 80 Plus Gold 750W Full Modular',
        pictureUrl: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22432_Fuente_ASUS_ROG_STRIX_750G_80_Plus_Gold_750W_Full_Modular_38c61d29-grn.jpg',
        price: 2000,
        category_id: 3
    },
    {
        id: 4,
        title: 'Gabinete ASUS TUF GT501 Vidrio Templado Black 3 x Coolers RGB Aura Sync',
        description: 'Gabinete ASUS TUF GT501 Vidrio Templado Black 3 x Coolers RGB Aura Sync',
        pictureUrl: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22711_Gabinete_ASUS_TUF_GT501_Vidrio_Templado_Black_3_x_Coolers_RGB_Aura_Sync_7a5d6e02-grn.jpg',
        price: 2000,
        category_id: 2
    },
    {
        id: 5,
        title: 'Gabinete Kolink Citadel Mesh RGB 3xCoolers ARGB Vidrio Templado',
        description: 'Gabinete Kolink Citadel Mesh RGB 3xCoolers ARGB Vidrio Templado',
        pictureUrl: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22997_Gabinete_Kolink_Citadel_Mesh_RGB_3xCoolers_ARGB_Vidrio_Templado_2031d0bd-grn.jpg',
        price: 2000,
        category_id: 2
    }
]

const itemsMock = function (categoryId) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(isNaN(categoryId)
                ? items
                    : items.filter(x => x.category_id.toString() === categoryId));
        }, 2000);
    });
}

export default itemsMock;