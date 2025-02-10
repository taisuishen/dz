import os
import re

# 目录路径
js_dir = '/usr/local/lib/python3.10/dist-packages/pywebio/html/js'

# 正则表达式，匹配单行和多行注释
single_line_comment = r'//.*'
multi_line_comment = r'/\*[\s\S]*?\*/'

# 遍历目录中的所有文件
for filename in os.listdir(js_dir):
    file_path = os.path.join(js_dir, filename)
    
    # 只处理 .js 文件
    if filename.endswith('.js'):
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # 删除注释
        content_without_comments = re.sub(single_line_comment, '', content)
        content_without_comments = re.sub(multi_line_comment, '', content_without_comments)

        # 将处理后的内容写回文件
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(content_without_comments)

        print(f'注释已从 {filename} 删除')
