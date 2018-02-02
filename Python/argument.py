class Argument:
  def __init__(self, tag, arg, *types):
    self.tag = tag
    self.arg = arg
    self.types = types
    self.atkers = []

  def add_atkers(self, *args):
    self.atkers += args
