
import markdown

sample_text = '''
# h1の文字が出てくると嬉しい

---

## h2の文字はでてくるだろう

* リスト1
* リスト2
* リスト3

> 引用してくれ

本文で **太字にもなるし**、*斜体にもなるはず* 。

```
まさかコードも入れられるんですか？
if (!lie) {
    return true;
}
```

| header1 | header2 | header3 |
|:-----------|------------:|:------------:|
| 左寄せ | 右寄せ | 中央寄せ |

すごい！
'''
import os


def cd():
    os.chdir(os.path.dirname(__file__))


if __name__ == "__main__":
    cd()
    with open("../../../doc/content/test.md", encoding="utf-8") as target:
        sample_text = target.read()
    md = markdown.Markdown()
    print(md.convert(sample_text))
