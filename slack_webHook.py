import datetime
import requests, json, time
def send_slack(msg):
    # 슬랙 웹훅 URL
    webhook_URL = "https://hooks.slack.com/services/T1AE30QG6/B93BJBKB4/
    U6fLuu9BAofBYuGlG67WLg0h"
    # 데이터
    data = {
        "channel": "#webhook",
        "emoji": ":angry:",
        "msg": msg,
        "username": "매니져",
        }
    # 페이로드 생성
    payload = {
        "channel": data["channel"],
        "username": data["username"],
        "icon_emoji": data["emoji"],
        "text": data["msg"],
        }
    # 전송
    response = requests.post(
        webhook_URL,
        data = json.dumps(payload),
        )
    # 결과
    print(response)
s = datetime.datetime.now()
send_slack(str(s))
