
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

md = markdown.Markdown()
print(md.convert(sample_text))
