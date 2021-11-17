
//Helper Function to convert Notion Project Pages into simple object
//Helper function for notion projects
function getProjectsFromNotionObject(notionPage) {
  //console.log(notionPage)
  return {
    id: notionPage.id,
    title: notionPage.properties["Project Name"].title[0].plain_text,
    description: notionPage.properties["Description"].rich_text[0].plain_text,
    tags: notionPage.properties["Tags"].multi_select.map(obj=>obj.name),
    techStack: notionPage.properties["Tech Stack"].multi_select.map(obj=>obj.name),
    //slug: notionPage.properties["Project Name"].title[0].plain_text.replace(/\s/g, '-'),
    url: notionPage.properties["Live Link"].url,
    image: notionPage.properties["Image"].files[0]?.file.url,
  }
}

//Helper function for notion Blogs
function getPostsFromNotionObject(notionPage) {

  return {
    id: notionPage.id,
    title: notionPage.properties["Title"].title[0].plain_text,
    description: notionPage.properties["Description"].rich_text[0].plain_text,
    tags: notionPage.properties["Tags"].multi_select.map(obj=>obj.name),
    slug: notionPage.properties["Title"].title[0].plain_text.replace(/\s/g, '-'),
    image: notionPage.properties["Image"].files[0]?.file.url,
  }
}

//Helper function for notion Youtube Videos
function getVideosFromNotionObject(notionPage) {
  return {
    id:notionPage.id,
    title: notionPage.properties["Title"].title[0].plain_text,
    description: notionPage.properties["Description"].rich_text[0].plain_text,
    tags: notionPage.properties["Tags"].multi_select.map(obj=>obj.name),
    image: notionPage.properties["Image"].files[0]?.file.url,
    url: notionPage.properties["Live Link"].url,
  }
}





module.exports={
getProjectsFromNotionObject,
getPostsFromNotionObject,
getVideosFromNotionObject
}