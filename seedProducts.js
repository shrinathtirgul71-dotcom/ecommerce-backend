// seedProducts.js - Run this file to populate your database with products
// Usage: node seedProducts.js

const mongoose = require('mongoose');
const productsData = require('./constant/productsdata');

// ✅ YOUR MONGODB CONNECTION STRING
const MONGODB_URI = 'mongodb+srv://shrinathtirgul71:shrinath%40111@cluster0.bckbclv.mongodb.net/amazonweb?retryWrites=true&w=majority';

// Product Schema
const productSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: {
        shortTitle: String,
        longTitle: String
    },
    price: {
        mrp: Number,
        cost: Number,
        discount: String
    },
    description: String,
    discount: String,
    tagline: String
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema, 'products');

// ============================================
// SEED FUNCTION
// ============================================

async function seedProducts() {
    try {
        console.log('🔄 Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Connected to MongoDB Atlas');

        // Check existing products
        const existingCount = await Product.countDocuments();
        console.log(`📊 Current products in database: ${existingCount}`);

        if (existingCount > 0) {
            console.log('\n⚠️  Database already has products!');
            console.log('   Clearing old products with broken images...\n');
            
            // 👇 UNCOMMENTED - THIS WILL DELETE ALL OLD PRODUCTS
            await Product.deleteMany({});
            console.log('🗑️  Cleared all existing products');
        }

        // Insert new products
        console.log('🚀 Inserting new products...');
        const result = await Product.insertMany(productsData);
        
        console.log(`\n✅ Successfully added ${result.length} products!`);
        console.log(`📊 Total products in database: ${await Product.countDocuments()}`);

        // Show first 5 products added
        console.log('\n📦 Sample products added:');
        result.slice(0, 5).forEach((product, index) => {
            console.log(`   ${index + 1}. ${product.title.shortTitle}: ₹${product.price.cost}`);
        });

        mongoose.connection.close();
        console.log('\n🎉 Database seeding completed successfully!');
        console.log('💡 Tip: Refresh your React app to see the new products!\n');
        
    } catch (error) {
        console.error('\n❌ Error seeding database:');
        console.error('   ', error.message);
        
        if (error.code === 11000) {
            console.log('\n💡 Duplicate key error detected!');
            console.log('   Some products already exist in database.');
            console.log('   Solution: Check your product IDs for duplicates.\n');
        }
        
        mongoose.connection.close();
        process.exit(1);
    }
}

// Run the seed function
seedProducts();