const teaserstack = {
    columnCount: 3,
    layout: 'gggg',
    title: 'Science articles header',
    teasers: [
      {
        imageUrl:
          'https://media.istockphoto.com/photos/nyhavn-copenhagen-denmark-picture-id901375804?k=20&m=901375804&s=612x612&w=0&h=LjDZ-dPGoCVU-xy-A4TyU8y6amshakYf5uTPWIKU5e8=',
        header: 'How customers won’t feel alone',
        description:
          'Starbucks uses round tables specifically so customers won’t feel alone. The lack of edges makes it seem less like people are missing. The lack of edges makes it seem less like people are missing.',
        border: true,
        borderColor: '#DBDBDB',
        backgroundImageSize: 'cover',
        backgroundImagePosition: 'center center',
      },
      {
        imageUrl:
          'http://ekkotek.com/MobileApps/youtubeApi/examples/images/Swan_large.jpg',
        header: 'The best known brand in the world',
        description:
          'The Coca-Cola logo can be recognized by 94 percent of the world’s population',
        border: true,
        borderColor: '#DBDBDB',
        backgroundImageSize: 'cover',
        backgroundImagePosition: 'center center',
      },
      {
        imageUrl:
          'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/9154/1655441194954/front-left-side-47.jpg?tr=w-375',
        header: 'Tuesday',
        description:
          'On average the most productive day of the workweek is Tuesday',
        border: true,
        borderColor: '#DBDBDB',
        backgroundImageSize: 'cover',
        backgroundImagePosition: 'center center',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1551651767-d5ffbdd04b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29wZW5oYWdlbnxlbnwwfHwwfHw%3D&w=1000&q=80',
        header: "The Meaning Behind Yahoo's Full Name",
        description:
          "Yahoo stands for 'Yet Another Hierarchical Officious Oracle.' Learn more about the meaning of Yahoo and how it became a household name.'",
        border: true,
        borderColor: '#DBDBDB',
        backgroundImageSize: 'cover',
        backgroundImagePosition: 'center center',
      },
      {
        imageUrl:
          'https://cdn.theatlantic.com/media/img/photo/2020/11/montana-photos/a01_23355789779-1/original.jpg',
        header: 'Ah Ikea, how we love you so',
        description: 'One in 10 Europeans are conceived in an Ikea bed',
        border: true,
        borderColor: '#DBDBDB',
        backgroundImageSize: 'cover',
        backgroundImagePosition: 'center center',
      },
      {
        imageUrl:
          'https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg',
        header: 'Google was originally called BackRub',
        description:
          'Google cofounders Larry Page and Sergey Brin are definitely fans of wordplay, and they seem to have a thing for company names that are both goofy and yet significant at the same time.',
        border: true,
        borderColor: '#DBDBDB',
        backgroundImageSize: 'cover',
        backgroundImagePosition: 'center center',
      },
    ],
  };

  const teaserstack1 = {
    ...teaserstack,
    teasers: teaserstack.teasers.map((teaser, index) => {
        const override = (() => {
            if(index===1){
            return {
                ...teaser,
                description: 'sudhan'
            }
        }
        return {}
        })
        return teaser
    })
  }

  console.log(teaserstack1);

  