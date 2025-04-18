{
    'name':'Password Protector Widget',
    'version':'18.0.1.0',
    'author':'Sanskar Sijariya',
    'category':'widget',
    'description':"""This Module widget allow you to protect passwords and show whenever you need""",
    'depend':['base'],
    'data':[
        'views/user_password.xml',
        'views/login_form.xml',

    ],
    'assets': {
        'web.assets_backend': [
            'password_protecter_widget/static/src/widget.js',
            'password_protecter_widget/static/src/widget.xml',

        ],
        'web.assets_frontend':[
              'password_protecter_widget/static/src/website_widget.js',
            'password_protecter_widget/static/src/style.css',

        ]
    },
    'support':'sanskarsija59@gmail.com',
    'icon':'/password_protecter_widget/static/description/icon.png',
    'license': 'LGPL-3',
}
