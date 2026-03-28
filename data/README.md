# 📁 Data Structure Guide

## Product Data Organization

This project uses JSON files to manage product data efficiently for a bakery showcase website.

## 📂 Folder Structure

```
src/
├── data/
│   └── products/
│       ├── featured.json    # Products for main carousel
│       └── catalog.json     # All catalog products
├── types/
│   └── product.ts          # TypeScript interfaces
├── services/
│   └── productService.ts   # Data service layer
└── components/
    ├── ProductCard.tsx     # Individual product card
    ├── ProductsGrid.tsx    # Grid of products
    └── Destacados.tsx      # Featured products carousel
```

## 📄 Product Schema

Each product has the following structure:

```json
{
  "id": "unique-product-id",
  "title": "Product Title",
  "subtitle": "Product description",
  "image": "/path/to/image.jpg",
  "buttonText": "Encargar Ahora",
  "category": "tentaciones|postres|tortas",
  "imagePosition": "20% 80% | top | center | bottom | left | right | cover"
}
```

### Image Position Options:

#### **Percentage-based positioning** (recommended for precise control):
- **"20% 30%"**: 20% from left, 30% from top
- **"50% 50%"**: Center (same as "center")
- **"80% 20%"**: 80% from left, 20% from top
- **"0% 0%"**: Top-left corner
- **"100% 100%"**: Bottom-right corner

#### **Predefined positions** (quick options):
- **"top"**: Aligns image to the top
- **"center"**: Centers image
- **"bottom"**: Aligns image to the bottom
- **"left"**: Aligns image to the left
- **"right"**: Aligns image to the right
- **"cover"**: Fills entire container (default)

#### **How percentages work**:
- First value: **X-axis** (horizontal position)
- Second value: **Y-axis** (vertical position)
- Range: **0% to 100%** for both axes
- Example: `"30% 70%"` = 30% from left, 70% from top

## 🎯 File Purposes

### `featured.json`
- Products shown in the main carousel
- Limited selection (4-7 products)
- High-priority items for showcase

### `catalog.json`
- Complete product catalog
- All available products
- Used in search and grid views

## 🔄 Adding New Products

1. **Choose the right file:**
   - `featured.json` for carousel items
   - `catalog.json` for full catalog

2. **Add product data:**
   ```json
   {
     "id": "new-product",
     "title": "New Product",
     "subtitle": "Description here",
     "image": "/path/to/image.jpg",
     "buttonText": "Encargar Ahora",
     "category": "postres"
   }
   ```

3. **Update categories** if needed in `types/product.ts`

## 🛠️ Data Service Functions

- `getFeaturedProducts()` - Get carousel products
- `getCatalogProducts()` - Get all catalog products
- `getAllProducts()` - Get all products combined
- `getProductsByCategory(category)` - Filter by category
- `getProductById(id)` - Find specific product
- `searchProducts(query)` - Search products

## 📝 Best Practices

- Use unique IDs for each product
- Keep image paths consistent
- Use descriptive subtitles
- Categorize products properly
- Update both files when needed
- Keep product titles concise but descriptive
