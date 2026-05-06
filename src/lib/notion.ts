import { Client } from '@notionhq/client';

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// Generic helper to fetch all pages from a database
export async function queryDatabase(databaseId: string, filter?: any) {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter,
  });
  return response.results;
}

// Helper to get a single page by ID
export async function getPage(pageId: string) {
  return await notion.pages.retrieve({ page_id: pageId });
}

// Helper to get page blocks (content)
export async function getBlocks(blockId: string) {
  const blocks = [];
  let cursor: string | undefined;

  do {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
    });
    blocks.push(...response.results);
    cursor = response.has_more ? response.next_cursor ?? undefined : undefined;
  } while (cursor);

  return blocks;
}
