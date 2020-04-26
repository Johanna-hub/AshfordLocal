import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Box from '#components/atoms/Box';
import { PlaceList, CategoryList, NavBar, Header } from '#components/app';

// TODO: Fix categories and move to constants file

// e.g. normalise `fruit-veg` -> `Fruit & Veg` with react-i18next or other i18n lib

// returns ['tag-name', 'tag-name-1', 'bread', ...]
const normaliseTags = (tags) => {
  if (Array.isArray(tags)) {
    return tags;
  }
  if (typeof tags === 'string') {
    return tags.split(",");
  }

  return [];
}

const extractItemData = ({
  node: {
    Name = '',
    Category_1 = '',
    Tags,
    Collection,
    Delivery,
    Image_Url,
  } = {},
}) => ({
  name: Name,
  category: Category_1,
  source: Image_Url,
  tags: normaliseTags(Tags),
  collection: Collection,
  delivery: Delivery, 
})

const IndexPage = ({ data }) => {

  const categories = [{
    name: 'Community',
    count: 0,
    source: "",
  }, {
    name: 'Fitness',
    count: 0,
    source: "",
  }, {
    name: 'Groceries',
    count: 0,
    source: "",
  }, {
      name: 'Services',
      count: 0,
      source: "",
  }, {
      name: 'Shops',
      count: 0,
      source: "",
  }, {
    name: 'Takeaway',
    count: 0,
    source: "",
  }, {
    name: 'Wine + Beer',
    count: 0,
    source: "",
  }
  ]

  const allBusinessData = data.allGoogleSheetValue.edges;
  const places = allBusinessData.map(extractItemData);
  places.forEach(place => {
    for(let i = 0; i < categories.length; i++){
      if(place.category === categories[i].name){
        categories[i].count++;
        if(categories[i].count === 1) {
          categories[i].source = place.source;
        }
      }
    }
  });
  return (
    <Box>
      <SEO title="Home page" />
      <NavBar></NavBar>
      <Header></Header>
      <CategoryList title="Browse Brixton by Category" items={categories} />
      <Box px={[16, 40]}>
        <PlaceList width="100%" items={places} />
      </Box>
      {/* {allBusinessData.map(businessData => <PlaceItem businessName={businessData.node.Name}/>)} */}
    </Box>
  )
}

export const query = graphql`
  query NameQuery {
    allGoogleSheetValue {
      edges {
        node {          
          Name      
          Category_1
          Category_2__only_if_relevant_
          Tags
          Collection
          Delivery
          Image_Url
        }
      }
    }
  }
`

export default IndexPage
