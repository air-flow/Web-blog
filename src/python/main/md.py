
import markdown
import os


def cd():
    os.chdir(os.path.dirname(__file__))


class MarkDonw(object):
    """
    docstring
    """

    def __init__(self,):
        """
        docstring
        """
        pass

    def ChangeHtml(parameter_list):
        """
        docstring
        """
        pass

    def ChangeMarkDown(parameter_list):
        """
        docstring
        """
        pass


if __name__ == "__main__":
    cd()
    with open("../../../doc/content/test.md", encoding="utf-8") as target:
        sample_text = target.read()
    md = markdown.Markdown(extensions=[
        "fenced_code",
    ])
    print(md.convert(sample_text))
