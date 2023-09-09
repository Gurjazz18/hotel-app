const hotels = [
    {
      id: 1,
      name: "Luxury Hotel",
      city: "New York",
      star: 5,
      rating: 4.7,
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg"
      ],
      reviews: [
        {
          id: 101,
          username: "User1",
          comment: "Great hotel! Highly recommended.",
          rating: 5
        },
        {
          id: 102,
          username: "User2",
          comment: "Good experience, friendly staff.",
          rating: 4.3
        }
      ]
    },
    {
      id: 2,
      name: "Cozy Inn",
      city: "San Francisco",
      star: 4,
      rating: 4.2,
      images: [
        "https://example.com/image4.jpg",
        "https://example.com/image5.jpg",
        "https://example.com/image6.jpg"
      ],
      reviews: [
        {
          id: 201,
          username: "User3",
          comment: "Lovely place to stay.",
          rating: 4.7
        },
        {
          id: 202,
          username: "User4",
          comment: "Clean rooms and good service.",
          rating: 4.0
        }
      ]
    },
    {
      id: 3,
      name: "Beachfront Resort",
      city: "Miami",
      star: 4,
      rating: 4.5,
      images: [
        "https://example.com/image7.jpg",
        "https://example.com/image8.jpg",
        "https://example.com/image9.jpg"
      ],
      reviews: [
        {
          id: 301,
          username: "User5",
          comment: "Fantastic view of the ocean.",
          rating: 4.8
        },
        {
          id: 302,
          username: "User6",
          comment: "Great for a relaxing getaway.",
          rating: 4.3
        }
      ]
    },
    {
      id: 4,
      name: "Downtown Suites",
      city: "Chicago",
      star: 3,
      rating: 3.8,
      images: [
        "https://example.com/image10.jpg",
        "https://example.com/image11.jpg",
        "https://example.com/image12.jpg"
      ],
      reviews: [
        {
          id: 401,
          username: "User7",
          comment: "Convenient location but average rooms.",
          rating: 3.5
        },
        {
          id: 402,
          username: "User8",
          comment: "Decent for a short stay.",
          rating: 4.0
        }
      ]
    },
    {
      id: 5,
      name: "Mountain View Lodge",
      city: "Denver",
      star: 4,
      rating: 4.6,
      images: [
        "https://example.com/image13.jpg",
        "https://example.com/image14.jpg",
        "https://example.com/image15.jpg"
      ],
      reviews: [
        {
          id: 501,
          username: "User9",
          comment: "Beautiful surroundings and cozy rooms.",
          rating: 4.9
        },
        {
          id: 502,
          username: "User10",
          comment: "A great escape into nature.",
          rating: 4.3
        }
      ]
    },
    {
      id: 6,
      name: "Cityscape View Hotel",
      city: "Los Angeles",
      star: 4,
      rating: 4.4,
      images: [
        "https://example.com/image16.jpg",
        "https://example.com/image17.jpg",
        "https://example.com/image18.jpg"
      ],
      reviews: [
        {
          id: 601,
          username: "User11",
          comment: "Stunning view from the room.",
          rating: 4.7
        },
        {
          id: 602,
          username: "User12",
          comment: "Enjoyed my stay in the city.",
          rating: 4.1
        }
      ]
    },
    {
      id: 7,
      name: "Historic Inn",
      city: "Boston",
      star: 3,
      rating: 3.9,
      images: [
        "https://example.com/image19.jpg",
        "https://example.com/image20.jpg",
        "https://example.com/image21.jpg"
      ],
      reviews: [
        {
          id: 701,
          username: "User13",
          comment: "Quaint and charming place.",
          rating: 4.0
        },
        {
          id: 702,
          username: "User14",
          comment: "Interesting history and friendly staff.",
          rating: 3.8
        }
      ]
    },
    {
      id: 8,
      name: "Seaside Retreat",
      city: "San Diego",
      star: 4,
      rating: 4.5,
      images: [
        "https://example.com/image22.jpg",
        "https://example.com/image23.jpg",
        "https://example.com/image24.jpg"
      ],
      reviews: [
        {
          id: 801,
          username: "User15",
          comment: "Relaxing by the ocean was a highlight.",
          rating: 4.6
        },
        {
          id: 802,
          username: "User16",
          comment: "Clean and comfortable stay.",
          rating: 4.4
        }
      ]
    },
    {
      id: 9,
      name: "Mountain Lodge",
      city: "Aspen",
      star: 4,
      rating: 4.7,
      images: [
        "https://example.com/image25.jpg",
        "https://example.com/image26.jpg",
        "https://example.com/image27.jpg"
      ],
      reviews: [
        {
          id: 901,
          username: "User17",
          comment: "Perfect for a winter getaway.",
          rating: 4.9
        },
        {
          id: 902,
          username: "User18",
          comment: "Cozy atmosphere and great service.",
          rating: 4.5
        }
      ]
    },
    {
      id: 10,
      name: "Desert Oasis Resort",
      city: "Phoenix",
      star: 4,
      rating: 4.3,
      images: [
        "https://example.com/image28.jpg",
        "https://example.com/image29.jpg",
        "https://example.com/image30.jpg"
      ],
      reviews: [
        {
          id: 1001,
          username: "User19",
          comment: "A unique desert experience.",
          rating: 4.2
        },
        {
          id: 1002,
          username: "User20",
          comment: "Relaxing stay in the desert.",
          rating: 4.5
        }
    ]
    }
]


export {hotels}