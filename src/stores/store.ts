import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axiosClient from "@/plugins/axios";
import type { Images } from "@/types/Types";

interface Favorite {
  id: string;
}

export const useImageStore = defineStore("image", () => {
  const images = ref<Images[]>([]);
  const searchedImages = ref<Images[]>([]);
  const favorite = ref<Favorite[]>([]);
  const localImages = ref<any>([]);

  const getRandomPhoto = async () => {
    const response = await axiosClient.get<Images[]>("photos/random", {
      params: {
        count: 9,
      },
    });

    return (images.value = response.data);
  };

  const searchPhoto = async (query: string) => {
    const { data } = await axiosClient.get("/search/photos", {
      params: {
        query: query,
        per_page: 9,
      },
    });

    if (query.length <= 0) {
      return images.value;
    } else {
      return (images.value = data.results);
    }
  };

  const addToFavorite = (id: string) => {
    if (!favorite.value.some((item): boolean => item.id === id)) {
      favorite.value.push({
        id: id,
      });
    }

    localStorage.setItem("images", JSON.stringify(favorite.value));
  };

  const favoriteList = computed(() => {
    return Object.keys(favorite.value).map((id: any) => {
      const image = favorite.value[id];
      const foundImage = images.value.find((i) => i.id === image.id);

      return {
        id: image.id,
        alt: foundImage ? foundImage.alt_description : "",
        urls: {
          small: foundImage ? foundImage.urls.small : "",
          regular: foundImage ? foundImage.urls.regular : "",
        },
        user: {
          name: foundImage ? foundImage.user.name : "",
          instagram_username: foundImage
            ? foundImage.user.instagram_username
            : "",
          profile_image: foundImage
            ? foundImage.user.profile_image?.medium
            : "",
        },
      };
    });
  });

  const fetchLocalImages = async () => {
    const imagesString = localStorage.getItem("images");

    if (imagesString !== null) {
      const images = JSON.parse(imagesString);

      for (const image of images) {
        const response = await axiosClient
          .get(`/photos/${image.id}`)
          .then((response) => {
            if (response !== null) {
              return localImages.value.push(response.data);
            }
          });
      }
    }
  };

  return {
    images,
    searchedImages,
    favorite,
    localImages,
    getRandomPhoto,
    searchPhoto,
    addToFavorite,
    favoriteList,
    fetchLocalImages,
  };
});
