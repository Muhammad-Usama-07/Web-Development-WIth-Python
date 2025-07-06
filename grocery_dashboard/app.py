from flask import Flask, render_template, jsonify
import pandas as pd

app = Flask(__name__)

# Load data
df = pd.read_csv('data/groceries.csv')
df['date'] = pd.to_datetime(df['date'])

@app.route('/')
def dashboard():
    return render_template('index.html')

@app.route('/api/data')
def get_data():
    # Process data for visualizations
    monthly_spending = df.groupby(df['date'].dt.to_period('M'))['price'].sum().reset_index()
    category_spending = df.groupby('category')['price'].sum().reset_index()
    return jsonify({
        'monthly': monthly_spending.to_dict(orient='records'),
        'categories': category_spending.to_dict(orient='records')
    })

if __name__ == '__main__':
    app.run(debug=True)