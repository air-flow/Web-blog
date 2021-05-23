# 目次
[:contents]

# とある日

MySQL8.0.23が一般公開され、リリースノートをみていて試したい機能があったので、テスト環境をアップグレードしたいと思ったのでその手順を記録する。

MySQL**8.0.21**から**8.0.23**にアップグレードをしたいと思います。

初めての試みのため試行錯誤を行ったので、書いた内容と実際に行った内容では手順が同じではないので予めご了承ください。

余計な手順は省いています。

# 環境

MySQL：8.0.21

OS：CentOS8

更に詳しい環境設定が見たい方はこちら↓

[https://updraft.hatenadiary.com/entry/2021/01/21/075228:embed:cite]


# アップグレード

[MySQLYumリポジトリを使用したLinuxへのMySQLのインストール](https://dev.mysql.com/doc/refman/8.0/en/linux-installation-yum-repo.html#yum-repo-setup)参考にした公式ページ。

## MySQLサーバーの停止

<div class="code-title" data-title="sh">
```sh
sudo systemctl stop mysqld
```
</div>

安全のために停止しておく。

多分そのままでも行ける気がする。

あと、不安な人はバックアップとか取っておくと良い。

## MySQLYumリポジトリの追加

[MySQL DeveloperZone のDownloadMySQL Yum Repositoryページ](https://dev.mysql.com/downloads/repo/yum/)任意のリポジトリを選択。

現状最新バージョンが`mysql80-community-release-el8-1.noarch.rpm`だったので自分はこれを選択します。

### 公式ページのコマンド

<div class="code-title" data-title="sh">
```sh
sudo yum install mysql80-community-release-el8-1.noarch.rpm
```
</div>

### 実際に行ったコマンド


<div class="code-title" data-title="sh">
```sh
sudo rpm -ivh https://dev.mysql.com/get/mysql80-community-release-el8-1.noarch.rpm
```
</div>

自分は別の方法でリポジトリの追加を行った。

たぶんどちらでも可能。

## MySQL Yumリポジトリ確認

実際にリポジトリ追加を確認する。

<div class="code-title" data-title="sh">
```sh
sudo yum repolist enabled | grep "mysql.*-community.*"
```
</div>

<div class="code-title" data-title="sh">
```sh
[hobby@localhost ~]$  yum repolist enabled | grep "mysql.*-community.*"
mysql-connectors-community MySQL Connectors Community
mysql-tools-community      MySQL Tools Community
mysql80-community          MySQL 8.0 Community Server
```
</div>

## デフォルトのMySQLモジュールを無効にする

> （EL8システムのみ）RHEL8やOracle Linux 8などのEL8ベースのシステムには、デフォルトで有効になっているMySQLモジュールが含まれています。このモジュールが無効にされていない限り、MySQLリポジトリによって提供されるパッケージをマスクします。

試行錯誤しててうまくインストールできない場合は、古いモジュールを参照している場合があります。

自分はそうでした。

<div class="code-title" data-title="sh">
```sh
sudo yum module disable mysql

================================================================================
 パッケージ        アーキテクチャー バージョン          リポジトリー      サイズ
================================================================================
モジュールプロファイルの無効化中:
 mysql/server
モジュールの無効化:
 mysql
```
</div>

## MySQLのインストール

<div class="code-title" data-title="sh">
```sh
sudo yum install mysql-community-server
```
</div>

<div class="code-title" data-title="sh">
```sh
[hobby@localhost ~]$  sudo yum install mysql-community-server
メタデータの期限切れの最終確認: 0:29:26 時間前の 2021年01月21日 05時55分58秒 に 実施しました。
依存関係が解決しました。
================================================================================
 パッケージ                      Arch    バージョン    リポジトリー       サイズ
================================================================================
インストール:
 mysql-community-server          x86_64  8.0.23-1.el8  mysql80-community   53 M
     置き換え  mariadb-connector-c-config.noarch 3.1.11-2.el8_3
     置き換え  mysql-server.x86_64 8.0.21-1.module_el8.2.0+493+63b41e36
依存関係のインストール:
 mysql-community-client          x86_64  8.0.23-1.el8  mysql80-community   12 M
     置き換え  mysql.x86_64 8.0.21-1.module_el8.2.0+493+63b41e36
 mysql-community-client-plugins  x86_64  8.0.23-1.el8  mysql80-community  108 k
 mysql-community-common          x86_64  8.0.23-1.el8  mysql80-community  624 k
 mysql-community-libs            x86_64  8.0.23-1.el8  mysql80-community  1.4 M

トランザクションの概要
================================================================================
インストール  5 パッケージ

ダウンロードサイズの合計: 67 M
これでよろしいですか? [y/N]: y
パッケージのダウンロード:
(1/5): mysql-community-client-plugins-8.0.23-1. 383 kB/s | 108 kB     00:00
(2/5): mysql-community-common-8.0.23-1.el8.x86_ 1.7 MB/s | 624 kB     00:00
(3/5): mysql-community-libs-8.0.23-1.el8.x86_64 6.7 MB/s | 1.4 MB     00:00
(4/5): mysql-community-client-8.0.23-1.el8.x86_  10 MB/s |  12 MB     00:01
(5/5): mysql-community-server-8.0.23-1.el8.x86_  19 MB/s |  53 MB     00:02
--------------------------------------------------------------------------------
合計                                             21 MB/s |  67 MB     00:03
警告: /var/cache/dnf/mysql80-community-b1f1ed5ba88ce0f8/packages/mysql-community-client-8.0.23-1.el8.x86_64.rpm: ヘッダー V3 DSA/SHA1 Signature、鍵 ID 5072e1f5: NOKEY
MySQL 8.0 Community Server                      2.0 MB/s |  27 kB     00:00
GPG 鍵 0x5072E1F5 をインポート中:
 Userid     : "MySQL Release Engineering <mysql-build@oss.oracle.com>"
 Fingerprint: A4A9 4068 76FC BD3C 4567 70C8 8C71 8D3B 5072 E1F5
 From       : /etc/pki/rpm-gpg/RPM-GPG-KEY-mysql
これでよろしいですか? [y/N]: y
鍵のインポートに成功しました
トランザクションの確認を実行中
トランザクションの確認に成功しました。
トランザクションのテストを実行中
トランザクションのテストに成功しました。
トランザクションを実行中
  準備             :                                                        1/1
  scriptletの実行中: mysql-community-common-8.0.23-1.el8.x86_64             1/1
  インストール     : mysql-community-common-8.0.23-1.el8.x86_64             1/8
  インストール     : mysql-community-client-plugins-8.0.23-1.el8.x86_64     2/8
  インストール     : mysql-community-libs-8.0.23-1.el8.x86_64               3/8
  scriptletの実行中: mysql-community-libs-8.0.23-1.el8.x86_64               3/8
  インストール     : mysql-community-client-8.0.23-1.el8.x86_64             4/8
  scriptletの実行中: mysql-community-server-8.0.23-1.el8.x86_64             5/8
  インストール     : mysql-community-server-8.0.23-1.el8.x86_64             5/8
警告: /etc/my.cnf は /etc/my.cnf.rpmnew として作成されました。

  scriptletの実行中: mysql-community-server-8.0.23-1.el8.x86_64             5/8
  scriptletの実行中: mysql-server-8.0.21-1.module_el8.2.0+493+63b41e36.x8   6/8
  廃止             : mysql-server-8.0.21-1.module_el8.2.0+493+63b41e36.x8   6/8
  scriptletの実行中: mysql-server-8.0.21-1.module_el8.2.0+493+63b41e36.x8   6/8
  廃止             : mariadb-connector-c-config-3.1.11-2.el8_3.noarch       7/8
  廃止             : mysql-8.0.21-1.module_el8.2.0+493+63b41e36.x86_64      8/8
  scriptletの実行中: mysql-8.0.21-1.module_el8.2.0+493+63b41e36.x86_64      8/8
  検証             : mysql-community-client-8.0.23-1.el8.x86_64             1/8
  検証             : mysql-8.0.21-1.module_el8.2.0+493+63b41e36.x86_64      2/8
  検証             : mysql-community-client-plugins-8.0.23-1.el8.x86_64     3/8
  検証             : mysql-community-common-8.0.23-1.el8.x86_64             4/8
  検証             : mysql-community-libs-8.0.23-1.el8.x86_64               5/8
  検証             : mysql-community-server-8.0.23-1.el8.x86_64             6/8
  検証             : mariadb-connector-c-config-3.1.11-2.el8_3.noarch       7/8
  検証             : mysql-server-8.0.21-1.module_el8.2.0+493+63b41e36.x8   8/8
Installed products updated.

インストール済み:
  mysql-community-client-8.0.23-1.el8.x86_64
  mysql-community-client-plugins-8.0.23-1.el8.x86_64
  mysql-community-common-8.0.23-1.el8.x86_64
  mysql-community-libs-8.0.23-1.el8.x86_64
  mysql-community-server-8.0.23-1.el8.x86_64

完了しました!

```
</div>

## MySQLサーバーの起動

<div class="code-title" data-title="sh">
```sh
sudo systemctl start mysqld
```
</div>

これで問題があればエラーが表示されるので対処してください。

何も表示されなければ無事起動完了。

## バージョン確認

<div class="code-title" data-title="sh">
```sh
[hobby@localhost ~]$ mysql -u root -p
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 13
Server version: 8.0.23 MySQL Community Server - GPL

Copyright (c) 2000, 2021, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
```
</div>

# 〆

初の試みだったため少し時間がかかりましたが、何より時間がかかったのが仮想環境内のネットワーク構築でした。

リポジトリの追加等はインターネットにつながってないとできないのであしからず。

原因は、ネットワークの有効化をしていないでした。

今回の記事は、MySQL5系から8系のメジャーバージョンアップグレードはかなりの記事があるのですが、マイナーバージョンアップはないので記録としても使用したいので記事にしました。

次からは今回アップグレードした環境を使用してMySQL8.0.23の機能を試してみたいと思います。