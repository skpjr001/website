// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client } from "@notionhq/client"


export default function GetPages(req, res) {
  const notion = new Client({ auth: process.env.NOTION_AUTH_SECRET });

  (async () => {
    const response = await notion.databases.query({ database_id: process.env.NotionProjectsDatabaseId, sorts:[{timestamp: "last_edited_time", direction: "descending"}] });
    //console.log(response);
    res.status(200).json(response)
  })();

  // (async () => {
  //   const pageId = '';
  //   const response = await notion.pages.retrieve({ page_id: pageId });
  //   console.log(response);
  //   res.status(200).json({ name: 'John Doe', data:response })
  // })();

  
}
