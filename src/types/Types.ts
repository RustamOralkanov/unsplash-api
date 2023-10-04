export interface Images {
  id: string;
  alt_description: string;
  user: {
    name: string;
    instagram_username: string;
    profile_image?: {
      medium: string;
    };
  };
  urls: {
    regular: string;
    small: string;
  };
}
