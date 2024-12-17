<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f2f5;
        }
        .order-form {
            background: #fff;
            padding: 20px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            max-width: 400px;
            width: 100%;
        }
        .order-form h2 {
            margin-bottom: 20px;
        }
        .order-form input,
        .order-form select {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .order-form button {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
        }
        .order-form button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="order-form">
        <?php
        // Get product details from query parameters
        $product = $_GET['product'] ?? 'Unknown Product';
        $price = $_GET['price'] ?? '0';
        ?>
        <h2>Order <?= htmlspecialchars($product) ?></h2>
        <form id="orderForm" method="post" action="submit_order.php">
            <input type="hidden" name="product" value="<?= htmlspecialchars($product) ?>">
            <input type="hidden" name="price" value="<?= htmlspecialchars($price) ?>">

            <label>Product:</label>
            <input type="text" value="<?= htmlspecialchars($product) ?>" readonly>

            <label>Price:</label>
            <input type="text" value="$<?= htmlspecialchars($price) ?>" readonly>

            <label>Quantity:</label>
            <input type="number" name="quantity" id="quantity" value="1" min="1" required>

            <button type="submit">Place Order</button>
        </form>
    </div>
</body>
</html>
