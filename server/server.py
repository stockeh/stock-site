import time
import stripe
from flask import Flask, request
from flask_cors import CORS

# Set your secret key. Remember to switch to your live secret key in production!
# See your keys here: https://dashboard.stripe.com/account/apikeys
stripe.api_key = 'sk_test_YU0Ub5wgGNxgjBJK68ipditS00FC8ffE47'

app = Flask(__name__)
CORS(app)


@app.route('/pay', methods=['POST'])
def pay():
    email = request.json.get('email', None)
    if email is None:
        return 'Invalid Email Address!', 400

    ammount = int(request.json.get('ammount', None)) * 100
    if ammount < 100 or ammount > 10000:
        return 'Invalid ammount specified!', 400

    intent = stripe.PaymentIntent.create(
        amount=ammount,
        currency='usd',
        metadata={'integration_check': 'accept_a_payment'},
        description='Coffee Support for Stock',
        receipt_email=email
    )

    return {'client_secret': intent.client_secret}, 200


@app.route('/time', methods=['GET'])
def get_current_time():
    return {'time': time.time()}
