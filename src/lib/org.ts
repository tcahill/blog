// Utilities for extracting information from a JSON-ified org-mode document

import type { OrgDocument } from 'ox-json-types';
import path from 'node:path';

export function articlePath(doc: OrgDocument): string {
    return doc.properties.title[0]?.toLowerCase().replaceAll(" ", "_") || "unknown";
}

export function resolveAssetPath(filePath: string): string {
    return path.join('/src/articles', filePath);
}
