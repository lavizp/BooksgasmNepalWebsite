export interface BookTypeShort{
    id: number;
    attributes: {
      name: string;
      subtitle: string;
      price: number;
      description: string;
      original_price: number;
      slug: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
}


export interface BookType {
    id: number;
    attributes: {
      name: string;
      subtitle: string;
      price: number;
      description: string;
      original_price: number;
      slug: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      image: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: string | null;
            caption: string | null;
            width: number;
            height: number;
            formats: {
              large: {
                ext: string;
                url: string;
                hash: string;
                mime: string;
                name: string;
                path: string | null;
                size: number;
                width: number;
                height: number;
                provider_metadata: {
                  public_id: string;
                  resource_type: string;
                }
              },
              small: {
                ext: string;
                url: string;
                hash: string;
                mime: string;
                name: string;
                path: string | null;
                size: number;
                width: number;
                height: number;
                provider_metadata: {
                  public_id: string;
                  resource_type: string;
                }
              },
              medium: {
                ext: string;
                url: string;
                hash: string;
                mime: string;
                name: string;
                path: string | null;
                size: number;
                width: number;
                height: number;
                provider_metadata: {
                  public_id: string;
                  resource_type: string;
                }
              },
              thumbnail: {
                ext: string;
                url: string;
                hash: string;
                mime: string;
                name: string;
                path: string | null;
                size: number;
                width: number;
                height: number;
                provider_metadata: {
                  public_id: string;
                  resource_type: string;
                }
              }
            },
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: string | null;
            provider: string;
            provider_metadata: {
              public_id: string;
              resource_type: string;
            };
            createdAt: string;
            updatedAt: string;
          }
        }
      },
      category: {
        data: {
          id: number;
          attributes: {
            name: string;
            slug: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
          }
        }
      }
    }
  }
  